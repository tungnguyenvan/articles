import { useGet } from ".";
import { ArticleModel } from "../models/ArticleModel";

export const useArticleDetail = (params: {
  id?: number;
  onError?: (error: unknown) => void;
}) => {
  return useGet<ArticleModel>({
    path: `/articles/${params.id}`,
    skip: !params.id,
    onError: params.onError,
  });
};

export const useMyArticles = (onError?: (error: unknown) => void) => {
  return useGet<ArticleModel[]>({
    path: `/articles/me`,
    onError,
  });
};
