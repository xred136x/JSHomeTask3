generateFooter(['Номер: +7(999)999-99-99', 'Эл.почта: exemple@gmail.com', 'Адрес: г.Разработчик, ул.Подвальная, д.5'], 'SiteName', 'gray', 'white');
function generateFooter(contacts, title, bgcolor, fontcolor){
    let arr = '';
    if(Array.isArray(contacts))
    for(let el of contacts ){
         arr += `<p style="margin: 0; color: ${fontcolor};">${el}</p>`;        
    }
    else if(typeof(contacts)==='number')
        arr += `<h3 style="margin-left: 10px; padding: 4px 8px; border: 3px solid white; font-size: 14px; text-decoration: none; color: white">empty</h3>`;
    document.write(   
        `<footer style="height: 100px; background-color: ${bgcolor}; display: flex; justify-content: space-between;"><div style="padding: 20px 8px;">${arr}</div>
        <div style="padding: 0 15px; display: flex; align-items: center;"><p style="color: ${fontcolor}; ">${title} @2000 г. </p></div></footer>`
    );
}