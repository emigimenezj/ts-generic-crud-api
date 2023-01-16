import axios from "axios";

export class BaseHttpService<T> {
    constructor(
        protected url: string
    ) {}

    async getAll(): Promise<T[]> {
        const { data } = await axios.get<T[]>(this.url);
        return data;
    }

    async getOne<ID>(id: ID): Promise<T> {
        const { data } = await axios.get<T>(this.url + '/' + id);
        return data;
    }

    async create<DTO>(dto: DTO): Promise<T> {
        const { data } = await axios.post<T>(this.url, dto);
        return data;
    }

    async update<ID, DTO>(id: ID, dto: DTO): Promise<T> {
        const { data } = await axios.put<T>(this.url + '/' + id, dto);
        return data;
    }

    async delete<ID>(id: ID): Promise<boolean> {
        const { data } = await axios.delete<boolean>(this.url + '/' + id);
        return data;
    }
}