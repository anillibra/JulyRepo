
interface Iemp {
    _id: number;
    name: string;
}

export class Employee {
    employees: Iemp[];

    add(): void {
        this.employees.push({ _id: 1, name: "Parik" });
    }
}