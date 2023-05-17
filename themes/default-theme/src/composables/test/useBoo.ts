export const useBoo = () => {
    return useState('foo', () => 'bar')
}
