export function domInjector(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            console.log(`buscando seletor ${seletor} para injetar em ${propertyKey}`, target);
            return document.querySelector(seletor);
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
