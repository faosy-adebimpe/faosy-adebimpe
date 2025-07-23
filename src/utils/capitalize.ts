const capitalize = (value: string) => {
    // check if value is valid
    if (!value) return 'Please provide a valid value';

    const firstLetter = value[0].toLocaleUpperCase();

    const newValue = ` ${firstLetter}${value.slice(1).toLocaleLowerCase()}`;
    return newValue;
};

export default capitalize;
