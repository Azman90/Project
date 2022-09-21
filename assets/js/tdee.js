let gender, age, weight, height, activity = null; // these are inputs
let bmr, tdee = null; // these are outputs

function calculateBMR() {
    if (gender != null && age != null && weight != null && height != null) {
        if (gender == "male") {
            bmr = Math.round(88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age));
        }
        else if (gender == "female") {
            bmr = Math.round(447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age));
        }
        $("#bmr").text(bmr);
    }
    else {
        bmr = null;
        $("#bmr").text("");
    }
    calculateTDEE();
}

function calculateTDEE() {
    if (activity != null && bmr != null) {
        tdee = Math.round(bmr * activity);
        $("#tdee").text(tdee);
    }
    else {
        tdee = null;
        $("#tdee").text("");
    }
}
$("#sedradio").on("change", function () {
    if ($(this).is(":checked")) {
        activity = 1.2;
        calculateTDEE();
    }
});

$("#lightradio").on("change", function () {
    if ($(this).is(":checked")) {
        activity = 1.375;
        calculateTDEE();
    }
});

$("#modradio").on("change", function () {
    if ($(this).is(":checked")) {
        activity = 1.55;
        calculateTDEE();
    }
});

$("#veryradio").on("change", function () {
    if ($(this).is(":checked")) {
        activity = 1.725;
        calculateTDEE();
    }
});

$("#extraradio").on("change", function () {
    if ($(this).is(":checked")) {
        activity = 1.9;
        calculateTDEE();
    }
});

$("#maleradio").on("change", function () {
    if ($(this).is(":checked")) {
        gender = "male";
        calculateBMR();
    }
});

$("#femaleradio").on("change", function () {
    if ($(this).is(":checked")) {
        gender = "female";
        calculateBMR();
    }
});

$("#weight").on("input", function () {
    if ($(this).val() == "") {
        weight = null;
    }
    else {
        weight = $(this).val();
    }
    calculateBMR();
});

$("#height").on("input", function () {
    if ($(this).val() == "") {
        height = null;
    }
    else {
        height = $(this).val();
    }
    calculateBMR();
});

$("#age").on("input", function () {
    if ($(this).val() == "") {
        age = null;
    }
    else {
        age = $(this).val();
    }
    calculateBMR();
});