
interface Iemp {
    _id: number;
    name: string;
}

export class Employee {
    employees: Iemp[];

    add(): void {
        this.employees.push({ _id: 1, name: "Parik" });
    }

    // Added modify function for employees  
    modifyEmployee(): void {
        this.employees.splice(0, 1, { _id: 1, name: "Parik Sheetle" });
        // this employee can't be modified
    }
}