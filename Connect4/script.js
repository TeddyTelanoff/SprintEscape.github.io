const rows = 6, cols = 7, blockSize = 100;
var selRow, selCol;

// Closest thing to enums in js
const Piece = {
	None: 0,
	Red: 1,
	Blue: 2,

	Count: 3,
};

const PieceColor = {
	None: '#CCCCCC',
	Red: '#FF1100',
	Blue: '#00DDFF',
};

// Make a fixed sized array
var board = new Array(rows * cols);
if (Object.seal)
{
	board.fill(Piece.None);
	Object.seal(board);
}

function setup()
{
	noStroke();
	ellipseMode(CORNER);
	createCanvas(cols * blockSize, rows * blockSize);
}

function draw()
{
	background(64);
	if (!mouseIsPressed)
	{
		selCol = CelSpace(mouseX, blockSize);
		selRow = CelSpace(mouseY, blockSize);
	}
	fill(76);
	square(selCol * blockSize, selRow * blockSize, blockSize, 5);

	for (let y = 0; y < rows; y++)
	{
		for (let x = 0; x < cols; x++)
		{
			fill(PieceToColor(board[x + y * cols]));
			circle(x * blockSize, y * blockSize, blockSize);
		}
	}
}

function mousePressed()
{
	selCol = CelSpace(mouseX, blockSize);
	selRow = CelSpace(mouseY, blockSize);
}

function mouseReleased()
{
	if (mouseX < 0 || mouseX >= width || mouseY < 0 || mouseY >= height)
		return;

	let col = CelSpace(mouseX, blockSize);
	let row = CelSpace(mouseY, blockSize);

	if (row == selRow && col == selCol)
	{
		board[col + row * cols]++;
		board[col + row * cols] %= Piece.Count;
	}
}

function PieceToColor(piece)
{
	switch (piece)
	{
	case Piece.None:
		return PieceColor.None;
	case Piece.Red:
		return PieceColor.Red;
	case Piece.Blue:
		return PieceColor.Blue;
	}
}

function CelSpace(left, right)
{ return left / right - (left % right) / right; }