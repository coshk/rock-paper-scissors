type Tool = '🪨' | '📜' | '✂️';

export const chooseWinner = (left: string, right: string): Tool | 'friendship' => {

    if (left === '🪨' && right === '📜') {
        return right;
    } else if (left === '📜' && right === '✂️') {
        return right;
    } else if (left === '✂️' && right === '🪨') {
        return right;
    }

    else if (right === '🪨' && left === '📜') {
        return left;
    } else if (right === '📜' && left === '✂️') {
        return left;
    } else if (right === '✂️' && left === '🪨') {
        return left;
    }

    else {
        return 'friendship';
    }

}
