
const sortSet = (a, b) => {
    if (a[1].length === b[1].length) {
        return 0;
    }
    else {
        return (a[1].length > b[1].length) ? -1 : 1;
    }
}

export default sortSet;