# 第一行
'''
多行注释
哈哈
'''
print('hello word');
import sys; x = 'runoob'; sys.stdout.write(x + '\n')
x="a"
y="b"
# 换行输出
print (x)
print (y)

print ('---------')
# 不换行输出
print (x),
print (y),

# 不换行输出
print (x,y);

s = 'abcdef';

print (s);

print (s[1:5]);

list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']
 
print(list)               # 输出完整列表
print(list[0])            # 输出列表的第一个元素
print(list[1:3])          # 输出第二个至第三个元素 
print(list[2:])           # 输出从第三个开始至列表末尾的所有元素
print(tinylist * 2)       # 输出列表两次
print(list + tinylist)    # 打印组合的列表

text = ('Put several strings within parentheses '
'to have them joined together.')
print(text) 

a, b = 0, 1
while a < 10:
    print(a);
    a, b = b, a+b
    print(a)
    print(b);