const buttonResumen = document.getElementById("buttonResumen");
const buttonBorrar = document.getElementById('buttonBorrar')
const categoria = document.getElementById("categoria");
const totalElement = document.getElementById("total");
const inputFields = {
    name: {
        element: document.getElementById("name"),
        validator: isValidNomApe
    },
    lastname: {
        element: document.getElementById("lastname"),
        validator: isValidNomApe
    },
    email: {
        element: document.getElementById("email"),
        validator: isValidMail
    },
    cantidad: {
        element: document.getElementById("cantidad"),
        validator: isValidCantidad
    }
};

function isValidNomApe(value) {
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(value);
}

function isValidMail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}

function isValidCantidad(value) {
    const parsedValue = parseInt(value);
    return Number.isInteger(parsedValue) && parsedValue > 0;
}

function validateInput(inputField) {
    const { element, validator } = inputField;
    const isValid = validator(element.value);
    element.classList.toggle("is-valid", isValid);
    element.classList.toggle("is-invalid", !isValid);
}

Object.values(inputFields).forEach(inputField => {
    const { element } = inputField;
    element.addEventListener("input", () => validateInput(inputField));
});

function isCheckValidity() {
    return Object.values(inputFields).every(inputField => {
        const { element, validator } = inputField;
        return validator(element.value);
    });
}

buttonResumen.addEventListener("click", event => {
    if (!isCheckValidity()) {
        Object.values(inputFields).forEach(inputField => {
            validateInput(inputField);
        });
        console.log("no valido");
    } else {
        totalElement.textContent = `Total a pagar: $${getTotal()}`;
        console.log("valido");
    }
});

function getDescuento() {
    switch (categoria.value) {
        case "estudiante":
            return 0.8; // 80% de descuento
        case "trainee":
            return 0.5; // 50% de descuento
        case "junior":
            return 0.15; // 15% de descuento
        default:
            return 0; // Sin descuento por defecto
    }
}
const getCantidad = () => parseInt(inputFields.cantidad.element.value);

function getTotal() {
    const valorBase = 200;
    const total = (valorBase - (valorBase * getDescuento())) * getCantidad();
    return total.toFixed(2);
}

buttonBorrar.addEventListener("click", event => {
    Object.values(inputFields).forEach(inputField => {
        inputField.element.classList.remove("is-valid");
        inputField.element.classList.remove("is-invalid");
    });
    totalElement.textContent = `Total a pagar: $`;
});
