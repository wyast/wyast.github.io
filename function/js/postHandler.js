// postHandler.js - 处理文章发布功能的独立模块

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有必要的DOM元素
    const titleInput = document.getElementById('titleInput');
    const membersInput = document.getElementById('membersInput');
    const contentInput = document.getElementById('contentInput');
    const addPostButton = document.getElementById('addPostButton');
    
    // 检查必要的元素是否存在
    if (!titleInput || !membersInput || !contentInput || !addPostButton) {
        console.error('找不到必要的DOM元素，请确保HTML中有正确的输入元素');
        return;
    }
    
    // 后端API地址
    const API_URL = 'http://101.200.45.82:3000/api/articles';
    
    // 为添加按钮添加点击事件监听器
    addPostButton.addEventListener('click', async function() {
        // 获取所有输入框内容
        const title = titleInput.value.trim();
        const members = membersInput.value.trim();
        const content = contentInput.value.trim();
        
        // 验证输入内容
        if (!title) {
            alert('请输入文章标题');
            titleInput.focus();
            return;
        }
        
        if (!content) {
            alert('请输入文章内容');
            contentInput.focus();
            return;
        }
        
        try {
            // 准备发送到后端的数据
            const postData = {
                title: title,
                members: members || '待定成员', // 如果没有输入成员，使用默认值
                content: content
            };
            
            // 发送POST请求到后端
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });
            
            // 检查响应状态
            if (!response.ok) {
                throw new Error(`HTTP错误! 状态: ${response.status}`);
            }
            
            // 解析响应数据
            const result = await response.json();
            
            // 清空所有输入框
            titleInput.value = '';
            membersInput.value = '';
            contentInput.value = '';
            
            // 显示成功消息
            alert('文章发布成功!');
            
            // 可选：刷新文章列表显示新发布的文章
            // 注意：这里需要根据实际情况调用刷新函数
            // 如果使用现有的renderPosts函数，可以这样调用：
            // renderPosts(true);
            
        } catch (error) {
            // 处理错误
            console.error('发布文章时出错:', error);
            alert('发布失败，请稍后重试: ' + error.message);
        }
    });
    
    // 可选：添加回车键发布功能
    contentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            addPostButton.click();
        }
    });
});