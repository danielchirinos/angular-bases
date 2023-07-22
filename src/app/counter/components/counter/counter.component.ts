import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    templateUrl: "./counter.component.html",
})
export class CounterComponent {

    public counter: number = 10;

    incrementar(valor: number): void {
        this.counter += valor
    }

    reset() {
        this.counter = 10
    }
}