import qs from 'qs';

// const obj = { id: '33', count: 4, types: [4, 5], provide: { category: 3, types: [6, 7] } };
// id=33&count=4&types=4&types=5&provide.category=3&provide.types=6&provide.types=7
export const qsStringify = (obj: Record<string, any>) => {
  const queryString = qs.stringify(
    obj,
    { skipNulls: true, arrayFormat: 'repeat', allowDots: true },
  );
  return queryString;
};

// parseQs将searchParams = {
//   id: '33',
//   count: '4',
//   types: [ '4', '5' ],
//   'provide.category': '3',
//   'provide.types': [ '6', '7' ]
// }
//
// 转成：{
//   id: '33',
//   count: '4',
//   types: [ '4', '5' ],
//   provide: { category: '3', types: [ '6', '7' ] }
// }
export function parseQs(searchParams: Record<string, string | string[]>) {
  // 先把 Record 变成 entries，再用 qs 解析成嵌套对象
  const entries = Object.entries(searchParams).flatMap(([k, v]) =>
    Array.isArray(v) ? v.map(val => [k, val]) : [[k, v]],
  );
  return qs.parse(new URLSearchParams(entries).toString(), {
    allowDots: true,
  });
}
