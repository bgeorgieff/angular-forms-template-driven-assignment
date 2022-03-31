import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") formSubmit: NgForm;
  subscriptionType = ["Basic", "Advanced", "Pro"];
  selectedSubscription = "Advanced";
  formSubmitted = false;

  formOutput = {};

  onSubmit() {
    this.formSubmitted = true;
    this.formOutput = this.formSubmit.value;
  }
}
