import isObject from '../isObject';

/**
 * Funkcja mapuje informacje zwrotna z backendu do jednego stringu
 */
const parseResponseError = (errObj?: any, { fallbackMessage = '' } = {}): string => {
  if (!errObj || !errObj.response) return fallbackMessage || 'Wystąpił błąd.';

  const { data } = errObj.response;
  let errMsg = '';

  if (!data) {
    return 'Wystąpił błąd.';
  }

  if (typeof data === 'string') {
    errMsg = data;
  }

  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (Array.isArray(item)) {
        item.forEach((message) => (errMsg += `${message}\n`));
        return;
      }

      if (isObject(item)) {
        return (errMsg += item.message);
      }

      errMsg += item;
    });
  }

  if (isObject(data)) {
    for (const key in data) {
      const currentItem = data[key];
      let message = '';

      if (typeof currentItem === 'string' && key !== 'code') {
        errMsg += `${currentItem}\n`;
      }

      if (Array.isArray(currentItem)) {
        currentItem.forEach((item) => {
          if (!(item.message || item.code) && isObject(item)) {
            for (const key in item) {
              const currentItem = item[key];

              if (Array.isArray(currentItem)) {
                currentItem.forEach((item) => {
                  message += `${item.message}\n`;
                });
              }
            }

            return message;
          }
          message += `${item?.message ?? item}\n`;
        });
      }

      if (isObject(currentItem)) {
        for (const item in currentItem) {
          message += `${currentItem[item][0]}\n`;
        }
      }

      errMsg += message;
    }
  }

  return errMsg;
};

export default parseResponseError;
