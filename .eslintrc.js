module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    // 0 不开启  1警告  2 强制使用
    "rules": {
        "spaced-comment": 2,// 注释风格要不要有空格什么的
        "space-before-blocks": 2,  // if function等的大括号之前需要有空格
        "space-infix-ops": 2,
        "space-before-function-paren": [2, "always"], // 强制在 function的左括号之前使用一致的空格
        "semi": 2, // 强制使用分号
        "no-irregular-whitespace": 2, // 不规则的空白不允许
        "no-trailing-spaces": 2, // 一行结束后面有空格就发出警告
        "no-underscore-dangle": 2, // 标识符不能以_开头或结尾
        "no-const-assign": 2, // 禁止修改const声明的变量
        "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复
        "no-duplicate-case": 2, // switch中的case标签不能重复
        "no-dupe-args": 2, // 函数参数不能重复
        "no-empty": 2, // 块语句中的内容不能为空
        "no-func-assign": 2, // 禁止重复的函数声明
        "no-undef": 2, // 不能有未定义的变量
        "no-use-before-define": 2, // 未定义前不能使用
        "camelcase": 2, // 强制驼峰法命名
        "react/jsx-no-duplicate-props": 2, // 防止在JSX中重复的props
        "react/jsx-no-undef": 2, // 在JSX中禁止未声明的变量
        "react/no-danger": 2, // 防止使用危险的JSX属性
        "react/no-multi-comp": 2, // 防止每个文件有多个组件定义
        "react/no-unknown-property": 2, // 防止使用未知的DOM属性
        "react/prefer-es6-class": 2, // 为React组件强制执行ES5或ES6类
        "react/no-array-index-key": 0, // 防止在数组中遍历中使用数组key做索引
        "react/no-deprecated": 2, // 不使用弃用的方法
        "react/jsx-equals-spacing": 2, // 在JSX属性中强制或禁止等号周围的空格
        "no-unreachable": 2, // 不能有无法执行的代码
        "comma-dangle": 2, // 对象字面量项尾不能有逗号
        "no-var": 2 // 不允许使用 var
    }
};
