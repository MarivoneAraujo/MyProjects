
function adicionarTarefa() {
    let tarefaInserida = document.getElementById(`tarefa`).value
    
    let diasSemana = document.getElementById(`dias-semana`).value 

    
        if (diasSemana == `domingo`){
            
            document.getElementById(`domingo`).innerHTML +=( tarefaInserida + "<br>")
           
        }else if (diasSemana == `segunda`){
            document.getElementById(`segunda`).innerHTML +=( tarefaInserida + "<br>") 

        }else if (diasSemana == `terca`){
            document.getElementById(`terca`).innerHTML +=( tarefaInserida + "<br>") 

        }else if (diasSemana == `quarta`){
            document.getElementById(`quarta`).innerHTML +=( tarefaInserida + "<br>") 

        }else if (diasSemana == `quinta`){
            document.getElementById(`quinta`).innerHTML +=( tarefaInserida + "<br>") 

        }else if (diasSemana == `sexta`){
            document.getElementById(`sexta`).innerHTML +=( tarefaInserida + "<br>")

        }else if(diasSemana == `sabado`){
            document.getElementById(`sabado`).innerHTML +=( tarefaInserida + "<br>")

        }
    document.getElementById(`tarefa`).value=``
}

