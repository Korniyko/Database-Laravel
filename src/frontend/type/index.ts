export type NewsState = News[] | []

export type News = {
    id: number;
    title: string;
    description:string;
    parent_id:number;
    created_at:number;
    updated_at:number;
}