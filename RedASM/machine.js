const codeBox = document.getElementById('code');

// TokenKinds
const TK = {
    Iden: "identifier",
    Num: "number",
};

class Token
{
    constructor(ty, val) {
        this.type = ty;
        this.value = val;
    }
}

function Next(tis)
{ return tis.tokens[tis.pos++]; }

function Compile()
{
    let tis = {
        pos: 0,
        src: codeBox.value,
        tokens: [],
    };

    tis.tokens = Parse(tis.src);

    while (tis.pos < tis.tokens.length)
    {
        let int = Next(tis);

        switch (int.value)
        {
        case 'test':
            alert('Test Failed Successfully');
            break;

        default:
            console.log(`Unknown instruction: ${int.value}`);
            break;
        }
    }
}

function Parse(src)
{
    let tokens = [];
    let pos = 0;

    while (pos < src.length)
    {
        let beg = pos++;
        if (IsNumber(src[beg]))
        {
            while (IsNumber(src[pos]) && pos < src.length)
                pos++;
            
            let txt = src.substr(beg, pos - beg);
            let tok = new Token(TK.Num, txt);
            tokens.push(tok);
        }
        else if (IsIdentifier(src[beg]))
        {
            while (IsIdentifier(src[pos]) && pos < src.length)
                pos++;
            
            let txt = src.substr(beg, pos - beg);
            let tok = new Token(TK.Iden, txt);
            tokens.push(tok);
        }
    }

    return tokens;
}

function IsIdentifier(c)
{ return /[a-zA-Z0-9]/.test(c); }


function IsNumber(c)
{ return /[0-9]/.test(c); }