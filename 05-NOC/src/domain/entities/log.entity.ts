
export enum LogSeverityLevel {
    low = "low",
    medium = "medium",
    high = "high"
}

export class LogEntity {
    public level: string;
    public message: string;
    public createdAt: Date;

    constructor(level:string, message:string){
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }
}