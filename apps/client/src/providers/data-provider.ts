import type { DataProvider } from "@refinedev/core";
import invariant from "tiny-invariant";

const API_URL = "http://localhost:5050";

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(`${API_URL}/${resource}`);

    console.log(response)

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
      meta,
    };
  },
  getList: async ({ resource, pagination, filters, sorters }) => {
    const params = new URLSearchParams();

    invariant(pagination?.current, "pagination.current is undefined");
    invariant(pagination?.pageSize, "pagination.pageSize is undefined");

    if (pagination) {
      params.append(
        "_start",
        String((pagination.current - 1) * pagination.pageSize)
      );
      params.append("_end", String(pagination.current * pagination.pageSize));
    }

    if (sorters && sorters.length > 0) {
      params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
      params.append("_order", sorters.map((sorter) => sorter.order).join(","));
    }

    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        if ("field" in filter && filter.operator === "eq") {
          params.append(filter.field, filter.value);
        }
      });
    }

    const response = await fetch(`${API_URL}/${resource}`);

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return { data, total: 0 };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(`${API_URL}/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
    };
  },
  create: async ({ resource, variables }) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
    };
  },
  deleteOne: () => {
    throw new Error("Not implemented");
  },
  getApiUrl: () => API_URL,
  // Optional methods:
  // getMany: () => { /* ... */ },
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};
