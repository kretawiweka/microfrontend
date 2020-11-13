export const provision = (type, component) => {
    switch (type) {
        case 'nav':
        case 'header':
        case 'footer':
            test('class', () => {
                expect(
                    component.props().hasOwnProperty('className')
                ).toBeFalsy()
            })

            test('existence', () => {
                expect(component.find(type).exists()).toBeTruthy()

                expect(component.find(type).length).toBe(1)
            })
            break

        case 'section':
            const section = component.find(type)

            test('class', () => {
                expect(section.props().hasOwnProperty('className')).toBeTruthy()
            })

            test('existence', () => {
                expect(section.exists()).toBeTruthy()
            })

            test('child', () => {
                expect(section.exists('.container')).toBeTruthy()

                expect(section.exists('.row')).toBeTruthy()

                expect(section.exists('.column')).toBeTruthy()
            })
            break
    }
}
