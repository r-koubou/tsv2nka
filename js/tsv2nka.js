/* =========================================================================

    tsv2nka.js
    Copyright (c) R-Koubou

    License
    https://github.com/r-koubou/tsv2nka/blob/master/LICENSE

   ======================================================================== */

/**
 * Convert from Textarea
 */
function parse()
{
    let varName         = document.getElementById( "variable_name" ).value;
    let type            = document.getElementById( "data_type" ).value;
    let src             = document.getElementById( "source" ).value;
    let dest            = document.getElementById( "destination" );
    let arraySizeText   = document.getElementById( "array_size" );
    let lines           = src.split( /\r\n|\r|\n/ );
    let prefix          = "";
    let arraySize       = 0;

    varName = varName.trim();

    if( varName.length == 0 )
    {
        alert( "Error: Variable name is empty." );
        return;
    }

    if( type === "Integer" )
    {
        prefix = "%"
    }
    else if( type === "String" )
    {
        prefix = "!"
    }

    varName = prefix + varName;

    dest.value = varName + "\n";
    for( let i of lines )
    {
        if( i.length == 0 )
        {
            continue;
        }
        let sep = i.split( /\t/ );
        for( let j of sep )
        {
            dest.value += j + "\n";
            arraySize++;
        }
    }

    array_size.innerText =  "Array size : " + arraySize;

}

/**
 * Copy result text to clipboard
 */
function copyResult()
{
    let dest = document.getElementById( "destination" );
    dest.select();
    document.execCommand( "copy" );
}

/**
 * Select all text in textarea (dest)
 */
function selectResult()
{
    let dest = document.getElementById( "destination" );
    dest.focus();
    dest.select();
}
