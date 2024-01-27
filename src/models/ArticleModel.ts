export interface ArticleModel {
    id: number;
    title: string;
    body: string;
    created_at: Date;
    updated_at: Date;
    favourite_count: number;
}