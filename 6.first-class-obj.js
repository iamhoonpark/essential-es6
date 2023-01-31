/**
 * 1. 일급객체(first-class object)
 * - 일반 객체처럼 모든 연산이 가능한 것
 *  · 함수의 매개변수로 전달
 *  · 함수의 반환값
 *  · 할당 명령문
 *  · 동일 비교 대상
 * - 즉, 일반 데이터처럼 함수에 인자로 전달 가능하며,
 *   리턴 값으로 사용 가능하며,
 *   변수에 할당이 가능하며,
 *   값으로 평가가 되는 것
 *
 * 2. 일급함수(first-class function)
 * - 함수가 일반 객체처럼 모든 연산이 가능한 것
 *  · 1번 내용과 동일
 * - 일급함수를 지원하는 언어: Java(v8), swift, kotlin, python
 *
 * 3. 고차함수(Higher-order function)
 * - 함수에서 함수를 인자로 받거나(=콜백)
 * - 함수를 반환(return)하는 함수를 고차함수라 함
 * - 콜백함수를 인자로 받았다면, 함수 안에서 필요한 순간에 인자로 전달받은 콜백함수를 호출할 수 있는 권함이 있음
 *   그래서 조금 더 높은 순서에 있다고 해서 고차함수라고 함
 *
 * 3-1. (고차함수) 함수형 프로그래밍
 * ※ 배열을 배우다가 뜬금없이 고차함수?
 * - 배열에서도 사용할 수 있는 유용한 고차함수들이 많기 때문
 * - 이렇게 함수 단위로 엮어나는 것을 함수형 프로그래밍이라 함
 * - for, if문을 통해서 순서대로 절차지향적으로 프로그래밍을 하는 것이 아니라,
 *   특정한 일을하는 함수들끼리 서로 연결하고 엮어놓는 것이다.
 * - 함수형 프로그래밍을 하기 위해서는 순수함수를 해나가는 것이 중요함
 *
 * 3-2. (함수형 프로그래밍) 순수함수
 * - 함수 안에서 불변성을 유지하는 것
 * - 전달받은 인자(매개변수)나 또는 함수 밖에 있는 특정한 상태를 함수 내부에서 수정하지 않고
 *   전달받은 인자를 통해서 함수에서 특정한 연산이나 일을 수행한 다음에 새로운 값을 리턴하는 것
 * - 이걸 함수 내부에서 사이드 이펙트(side effect, 부작용)이 없게 만든다 라고도 함
 * - 이렇게 순수함수를 만듬으로써 에러를 줄이고 가독성은 높일 수 있음
 *
 * 즉, 이런 순수함수들을 서로 묶어서 연결해놓은 것을 함수형 프로그램밍이라고 함
 * - 그래서 함수형 프로그래밍을 사용하면 데이터를 변경하지도 않고, 변수를 사용하지 않고
 *   조건문, 반복문도 사용하지 않음
 *   (데이터를 변경X, 변수사용X, 조건문X, 반복문X)
 * - 배열에서도 함수형 프로그래밍 스타일로 코딩을 해나갈 수 있음
 */
