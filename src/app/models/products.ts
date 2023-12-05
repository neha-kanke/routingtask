


export interface Iproduct {
    pName: string;
    pId: string;
    pStatus: productstatus;
    canReturn: number
}

export enum productstatus
{
    InProgress='In Progress',
    Dispathched='Dispathched',
    Delivered='Delivered'
}



