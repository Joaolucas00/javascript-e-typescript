export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string) {
        const getter = function() {
            console.log(`buscando seletor ${seletor} para injetar em ${propertyKey}`, target);
            
            return document.querySelector(seletor)
        }

        Object.defineProperty(target, propertyKey, {get: getter})
    }
}