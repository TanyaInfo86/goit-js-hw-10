
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const delay = parseInt(form.elements.delay.value);
        const state = form.elements.state.value;

        createPromise(delay, state)
            .then((delay) => {
                iziToast.success({
                    
                    message: `Fulfilled promise in ${delay}ms`,
                    position: "topRight"
                });
            })
            .catch((delay) => {
                iziToast.error({
                  
                    message: `Rejected promise in ${delay}ms`,
                    position: "topRight"
                });
            });

        form.reset();
    });

    function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (state === "fulfilled") {
                    resolve(delay);
                } else {
                    reject(delay);
                }
            }, delay);
        });
    }
});