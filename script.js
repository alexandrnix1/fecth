document.getElementById('btn').addEventListener('click', function() {
        console.log('Функция вызвана');
    });
   
    document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.content-block').forEach(block => block.classList.remove('active'));

        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

const button = document.getElementById('fetchButton');
        const statusDiv = document.getElementById('status');
        const resultDiv = document.getElementById('result');
        
        async function fetchData() {
            button.disabled = true;
            button.textContent = 'Загрузка...';
            
            statusDiv.innerHTML = '<div class="loading">Выполняется запрос...</div>';
            resultDiv.innerHTML = '';
            
            try {
                const response = await fetch('https://api.waifu.pics/sfw/neko');
                
                
                if (!response.ok) {
                    throw new Error(`HTTP ошибка: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();

                const imageUrl = data.url;
                
                statusDiv.innerHTML = '<div class="success">Neko тяночка будет:></div>';
                resultDiv.innerHTML = `
            <strong>Вот тяночка Neko:></strong><br><br>
            <img src="${imageUrl}" alt="Neko image" style="max-width: 100%; max-height: 400px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); margin: 10px 0;">
            <br><br>
                    <details>
                        <summary>Показать URL Neko тяночки:></summary>
                        <pre style="background:#f4f4f4; padding:10px; border-radius:5px; overflow-x:auto;">${JSON.stringify(data, null, 2)}</pre>
                    </details>
                `;
                
            } catch (error) {
                console.error('Ошибка:', error);
                statusDiv.innerHTML = `<div class="error">Ошибка: ${error.message}</div>`;
                resultDiv.innerHTML = '<div class="error">Не будет Neko тянки:(</div>';
                
            } finally {
                button.disabled = false;
                button.textContent = 'Запрос';
            }
        }
        
        button.addEventListener('click', fetchData);