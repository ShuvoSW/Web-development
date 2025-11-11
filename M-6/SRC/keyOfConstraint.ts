type RichPeoplesVehicle = {
    bike: string;
    car: string;
    cng: string;
}

type myVehicle1 = "bike" | "car" | "cng";

type myVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: myVehicle1 = "ship";