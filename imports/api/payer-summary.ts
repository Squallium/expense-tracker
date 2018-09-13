import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table({
    tableName: 'glad_payers_summary'
})
export class PayerSummary extends Model<PayerSummary> {
    @Column({
        primaryKey: true
    })
    user_id: string;

    @Column
    install_time: Date;

    @Column
    country: string;

    @Column
    media_source: string;
}