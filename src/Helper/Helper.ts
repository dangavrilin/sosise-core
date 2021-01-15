import dayjs from 'dayjs';
import { inspect } from 'util';

export default class Helper {
    /**
     * Helper method which checks if given date is not null, casts to date format
     */
    public static parseDate(date: string): string | null {
        if (date === null || date.toString().trim() === '') {
            return null;
        }

        return dayjs(date).format('YYYY-MM-DD');
    }

    /**
     * Helper method which checks if given date is not null, casts to date format
     */
    public static parseDateTime(date: string): string | null {
        if (date === null || date.toString().trim() === '') {
            return null;
        }

        return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * Helper method which gets current date time
     */
    public static getCurrentDateTime(): string {
        return dayjs().format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * Die and dump
     */
    public static dd(params: any): void {
        console.log(inspect(params, {
            depth: null,
            maxArrayLength: null,
            colors: true
        }));
        process.exit(0);
    }

    /**
     * Dump
     */
    public static dump(params: any): void {
        console.log(inspect(params, {
            depth: null,
            maxArrayLength: null,
            colors: true
        }));
    }
}