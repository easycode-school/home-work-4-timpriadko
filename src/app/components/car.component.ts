import {Component} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent {
    public carInfo = {
        name: 'Lexus',
        mileage: 20000,
        fuelTankCapacity: 93,
        currentFuelAmount: 70,
        characteristics: [
            'Двигатель 5.7 литра',
            'Максимальная скорость 220',
            'Разгон до 100 км/ч за 7.3с'
        ]
    };
    // Drive method handler
    public driveOnClickHandler() {
            this.carInfo.currentFuelAmount -= 10;
            if (this.carInfo.currentFuelAmount > 0) {
                this.carInfo.mileage += 100;
            }
    }
    // Refuel method handler
    public refuelOnClickHandler($event) {
        this.carInfo.currentFuelAmount = 93;
    }
}
