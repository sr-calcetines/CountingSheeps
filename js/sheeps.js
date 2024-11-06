const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];

const list2 = [ false, false, false ];

let counter=0;

function method(list){

    for (i=0; i<list.length; i++){

        if(list[i] == true){
            counter++;
        }

    }

    if (counter>=list.length){

        console.log("All the sheeps are alive")
        counter = 0;

    }else if(counter<list.length & counter>0){

        console.log("There are " + counter + " sheeps in total");
        counter = 0;

    }else{

        console.log("UPS!!! Wolfs eaten Sheeps");
        counter = 0;

    }

}

method(list1);
method(list2);