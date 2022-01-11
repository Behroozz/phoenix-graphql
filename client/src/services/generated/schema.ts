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

export type League = {
  __typename?: "League";
  ID?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  franchise?: Maybe<Scalars["String"]>;
  infrastructure?: Maybe<League_Infrastructure>;
  name?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type League_Infrastructure = {
  __typename?: "League_Infrastructure";
  caption?: Maybe<Scalars["String"]>;
  encryption?: Maybe<Scalars["String"]>;
  metadata_id?: Maybe<Scalars["Float"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addLeague?: Maybe<League>;
};

export type MutationAddLeagueArgs = {
  description: Scalars["String"];
  franchise: Scalars["String"];
  name: Scalars["String"];
  short_name: Scalars["String"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
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
  getLeagueByName?: Maybe<Array<Maybe<League>>>;
  getPersonById?: Maybe<Person>;
};

export type QueryGetLeagueByNameArgs = {
  name: Scalars["String"];
};

export type QueryGetPersonByIdArgs = {
  id: Scalars["Int"];
};

export type GetLeagueByNameQueryVariables = Exact<{
  name: Scalars["String"];
}>;

export type GetLeagueByNameQuery = {
  __typename?: "Query";
  getLeagueByName?:
    | Array<
        | {
            __typename?: "League";
            title?: string | null | undefined;
            ID?: number | null | undefined;
            thumbnail?: string | null | undefined;
            name?: string | null | undefined;
            franchise?: string | null | undefined;
            short_name?: string | null | undefined;
            description?: string | null | undefined;
            infrastructure?:
              | {
                  __typename?: "League_Infrastructure";
                  caption?: string | null | undefined;
                  encryption?: string | null | undefined;
                  metadata_id?: number | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
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

export const GetLeagueByNameDocument = `
    query getLeagueByName($name: String!) {
  getLeagueByName(name: $name) {
    title
    ID
    thumbnail
    name
    franchise
    short_name
    description
    infrastructure {
      caption
      encryption
      metadata_id
    }
  }
}
    `;
export const useGetLeagueByNameQuery = <
  TData = GetLeagueByNameQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetLeagueByNameQueryVariables,
  options?: UseQueryOptions<GetLeagueByNameQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetLeagueByNameQuery, TError, TData>(
    ["getLeagueByName", variables],
    fetcher<GetLeagueByNameQuery, GetLeagueByNameQueryVariables>(
      client,
      GetLeagueByNameDocument,
      variables,
      headers
    ),
    options
  );
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
