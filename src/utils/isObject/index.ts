const isObject = (value: any): boolean => Boolean(value && value.constructor === Object);

export default isObject;
