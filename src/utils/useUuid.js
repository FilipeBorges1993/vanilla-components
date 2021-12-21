export default function(seed = '') {
    return (Math.random() + 1).toString(36).substring(7) + '_' + seed;
}
