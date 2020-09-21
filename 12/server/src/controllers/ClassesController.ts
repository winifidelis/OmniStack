import { Request, Response } from 'express'

import db from '../database/connection';
import convertHoutToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    async index(request: Request, response: Response) {
        const filter = request.query;

        if(filter.wee){

        }
    }


    async create(request: Request, response: Response) {

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
            const user_id = insertedUsersIds[0];
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            });
            const classe_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    classe_id: classe_id,
                    week_day: scheduleItem.week_day,
                    from: convertHoutToMinutes(scheduleItem.from),
                    to: convertHoutToMinutes(scheduleItem.to),
                };
            });
            await trx('classes_schedule').insert(classSchedule)

            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: "Unexpected error while creating new class."
            })
        }
    }
}