import { getUrl } from '@/utils/helpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';

// Create your service using a base URL and expected endpoints
export const FrappeApi = createApi({
  reducerPath: 'FrappeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getUrl()}/`,
    prepareHeaders: (headers, {}) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      //   const token = (getState() as RootState).user.token;
      //   if (token) {
      //     headers.set('Authorization', `Bearer ${token}`);
      //     // headers.set('Authentication', `Bearer ${token}`);
      //   }
      return headers;
    },
  }),
  endpoints: builder => ({
    getStatusList: builder.mutation({
      query: ({ body }: { body: FormData }) => ({
        url: '/frappe.client.get_list',
        method: 'POST',
        body,
      }),
    }),
    getShipmentList: builder.mutation({
      query: ({
        params,
      }: {
        params?: {
          search?: string;
        };
      }) => ({
        url: '/frappe.client.get_list',
        method: 'POST',
        body: {
          doctype: 'AWB',
          fields: ['*'],
          filters: {
            name: ['like', `%${params?.search || ''}%`],
          },
        },
      }),
    }),
  }),
});

export const { useGetShipmentListMutation, useGetStatusListMutation } =
  FrappeApi;
