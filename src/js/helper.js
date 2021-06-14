import { TimeOut } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(`${TimeOut}`)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}`);

    let recipe = data.data;

    return recipe;
  } catch (err) {
    throw new Error(err);
  }
};

export const setJson = async function (url, newData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(newData),
    });
    const res = await Promise.race([fetchPro, timeout(`${TimeOut}`)]);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}`);

    let recipe = data.data;

    return recipe;
  } catch (err) {
    throw new Error(err);
  }
};
