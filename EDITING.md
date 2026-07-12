# 如何在线修改这个简历网站

网站地址：

https://elva-s-resume.vercel.app/

以后如果只是修改文字，优先改 `content.json`，不要直接改 `index.html`。

## 修改步骤

1. 打开 GitHub 仓库：https://github.com/123canoe/ELVA-s-resume
2. 点击 `content.json`。
3. 点击右上角铅笔图标编辑。
4. 修改冒号右边引号里的文字。
5. 点击 `Commit changes` 保存。
6. Vercel 会自动重新部署，通常 1-3 分钟后网站更新。

## 注意

- 不要删除英文 key，例如 `"hero.intro"`。
- 只改引号里的中文内容。
- 每一行末尾的逗号要保留，最后一行除外。
- 如果要换行，使用 `\n`。
- 如果标题里需要彩色强调，可以保留 `<span>`，例如：

```json
"contact.title": "一起，把下一杯茶<br />做得<span>更好</span>。"
```

## 常用字段

- `"name"`：姓名
- `"hero.role"`：首页身份说明
- `"hero.intro"`：首页个人介绍
- `"work.title"`：核心项目区标题
- `"p1.title"` / `"p1.summary"`：第一个核心项目
- `"experience.company"`：公司名称
- `"experience.role"`：职位名称
- `"contact.body"`：联系区介绍
- `"contact.location"`：所在地
