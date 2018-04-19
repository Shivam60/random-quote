quotes=[
    "Fear is a place where you just tell the truth -Clive Barker",
    "Wasted youth is better by far the a wise and productive old age. -Meatloaf",
    "Seek the truth, no matter where it lies. -Metallica",
    "The foolish man think with narrow mind and speak with wide mouth. -Charlie Chin",    
    "There is no knowledge that is not power. -Mortal Kombat 3",    
    "We've got far too many hung juries and not enough hung defendants. -Dennis Miller",    
    "Conservatives want live babies so they can raise them to be dead soldiers. -George Carlin",    
    "The strength of the Constitution lies entirely in the determination of each citizen to defend it. -Albert Einstein",    
    "Any plan, no matter how poorly conceived, if boldly executed, is better than inaction. -U.S. Infantry Manual",    
    "Affection can no more spoil a child than the sun could be put out by a bucket of gasoline. -L. Ron Hubbard",    
    "A fanatic is a nut who has something to believe in. -Dean Koontz",    
    "Whether or not God exists is not as important as whether a belief in God exists. -Daniel Jackson, SG-1"
]
stack=[]
function writequote(){
    if(quotes.length===0){
        quotes=stack;
        stack=[];
    }

    var ind=Math.floor(Math.random()*(quotes.length-1));
    console.log(ind,quotes.length);

    $("#quote").hide().html(quotes[ind]).fadeTo('slow',1,"linear");

    stack.push(quotes[ind]);
    quotes.splice(ind,1);
}
function prevquote(){
    if(stack.length==0){
        stack=quotes;        
    }
    stack.pop();
    $("#quote").hide().html(stack[stack.length-1]).fadeTo('slow',1,"linear");
}
$('.popup').click(function(event) {

    var width  = 575,
        href="http://twitter.com/share";
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        txt=$("#quote").html().split('.')[0].split(' ').join('%20'),
        url    = href+"?text="+txt,
        opts   = 'status=1' +
                    ',width='  + width  +
                    ',height=' + height +
                    ',top='    + top    +
                    ',left='   + left;
        console.log(opts);

    window.open(url, 'twitter', opts);

    return false;
});
