const forms = () => {
    const form = document.querySelector(".newsletter__form");
    const input = document.querySelector(".email");

    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы скоро с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let statusMessage = document.createElement("div");
        form.appendChild(statusMessage);

        const formData = new FormData(form);

        
    });
};

// export default forms;