
export const state = () => ({
    dataColumns:[
        {name:'ID',serverName:'id'},
        {name:'Магазин',serverName:'location'},
        {name:'Сервис',serverName:'service'},
        {name:'UUID',serverName:'uuid'},
        {name:'Заявка',serverName:'request'},
        {name:'Дата платежа',serverName:'payment_date'},
        {name:'Дата слота',serverName:'slot_date'},
        {name:'Код ответа',serverName:'id'},
        {name:'Сообщение сервиса',serverName:'service_message'},
    ],
    dataReqs:[{
        "id": 6,
        "location": "Химки",
        "service": "Планирование в магазине",
        "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
        "request": "6984427",
        "payment_date": "2019.10.10 21:07:03",
        "slot_date": "2019.10.10 21:07:03",
        "answer_code": 0,
        "service_message": "Успешно"
        },
        {
            "id": 5,
            "location": "Теплый стан",
            "service": "Запись на планирование в магазине систем хранения",
            "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
            "request": "5476854",
            "payment_date": "2019.10.10 21:07:03",
            "slot_date": "2019.10.10 21:07:03",
            "answer_code": 0,
            "service_message": "Платеж отклонен"
            },
    {
        "id": 4,
        "location": "Нижний Новгород",
        "service": "Сборка",
        "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
        "request": "9345051",
        "payment_date": "2019.10.10 21:07:03",
        "slot_date": "2019.10.10 21:07:03",
        "answer_code": 1,
        "service_message": "Платеж отклонен"
        },
    {
        "id": 3,
        "location": "Химки",
        "service": "Запись на планирование в магазине систем хранения",
        "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
        "request": "3012900",
        "payment_date": "2018.10.10 21:07:03",
        "slot_date": "2018.10.10 21:07:03",
        "answer_code": 5,
        "service_message": "Успешно"
    },
    {
        "id": 2,
        "location": "Екатеринбург",
        "service": "Возврат для покупателей",
        "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
        "request": "5504306",
        "payment_date": "2018.10.10 21:07:03",
        "slot_date": "2018.10.10 21:07:03",
        "answer_code": 6,
        "service_message": "Успешно"
    },
    {
        "id": 1,
        "location": "Химки",
        "service": "Планирование гарберобов дистанционно",
        "uuid": "d85492ec-5dbf-783f-8682-517601d4b4b3",
        "request": "2515526",
        "payment_date": "2018.10.10 21:07:03",
        "slot_date": "2018.10.10 21:07:03",
        "answer_code": 7,
        "service_message": "Успешно"
        },






        
    ],
    dataFilters:[{
        name:'Магазин',
        nameAll:'Все магазины',
        serverName:"location",
        type:'drop'
    },
    {
        name:'Сервис',
        nameAll:'Все сервисы',
        serverName:"service",
        type:'drop'
    },
    {
        name:'Дата платежа',
        nameAll:'',
        serverName:"payment_date",
        type:'date',
        startTime:"2018-06-04",
        endTime:"2020-06-13"
    },
    {
        name:'Сообщение сервиса',
        nameAll:'Все сообщения',
        serverName:"service_message",
        type:'drop'
    },
    ],
   })
   
   export const mutations = {
     dataFilterDrop(state, name) {
        state.dataFilters.forEach(el => {
            if(name.serverName==el.serverName){
                el.currentName=name.name;
            }  
        });



       state.dataReqs=state.dataReqs.map((el)=>{
           if(el[name.serverName]!=name.name&&name.name.indexOf('Все')==-1){
            el.hide=true;
           }else{
            InnerFunctionToCheckHide(el, state, name);
           }
           return el;
       })

       

     },



     dataFilterDate(state, name) {
        state.dataFilters.forEach(el => {
            if(name.serverName==el.serverName){
                el.startTime=name.start;
                el.endTime=name.end;
            }  
        });


       state.dataReqs=state.dataReqs.map((el)=>{
           if(new Date(el[name.serverName]).getTime()>=new Date(name.start).getTime()&&new Date(el[name.serverName]).getTime()<=new Date(name.end).getTime()){
            
            InnerFunctionToCheckHide(el, state, name);


           }else{
              el.hide=true;
           }

           

           return el;
        })
        
     },
    
   }
   
   export const actions = {
    
   }
   
   export const getters = {
     getdataColumns: s => s.dataColumns,
     getdataReqs: s => s.dataReqs,
     getdataFilters: s => s.dataFilters
   }






function InnerFunctionToCheckHide(el, state, name) {
    if (el.hide == true) {
        let i = -1;
        state.dataFilters.forEach(dl => {
            if (dl.currentName != undefined && dl.currentName != dl.nameAll) {
                if (dl.currentName != el[dl.serverName]) {
                    i = 1;
                }
            }
            if (dl.type == 'date') {
                if (new Date(el[name.serverName]).getTime() < new Date(dl.startTime).getTime() || new Date(el[name.serverName]).getTime() > new Date(dl.endTime).getTime()) {
                    i = 1;
                }
            }

        });

        if (i == -1) {
            el.hide = undefined;
        }

    }
}
   