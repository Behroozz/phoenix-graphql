import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: "Person";
  employee_age?: Maybe<Scalars["Float"]>;
  employee_name?: Maybe<Scalars["String"]>;
  employee_salary?: Maybe<Scalars["Float"]>;
  profile_image?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  getPersonById?: Maybe<Person>;
};

export type QueryGetPersonByIdArgs = {
  id: Scalars["Int"];
};

export type GetPersonByIdQueryQueryVariables = Exact<{
  getPersonById: Scalars["Int"];
}>;

export type GetPersonByIdQueryQuery = {
  __typename?: "Query";
  getPersonById?:
    | { __typename?: "Person"; employee_name?: string | null | undefined }
    | null
    | undefined;
};

export const GetPersonByIdQueryDocument = `
    query getPersonByIdQuery($getPersonById: Int!) {
  getPersonById(id: $getPersonById) {
    employee_name
  }
}
    `;
export const useGetPersonByIdQueryQuery = <
  TData = GetPersonByIdQueryQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetPersonByIdQueryQueryVariables,
  options?: UseQueryOptions<GetPersonByIdQueryQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetPersonByIdQueryQuery, TError, TData>(
    ["getPersonByIdQuery", variables],
    fetcher<GetPersonByIdQueryQuery, GetPersonByIdQueryQueryVariables>(
      client,
      GetPersonByIdQueryDocument,
      variables,
      headers
    ),
    options
  );
