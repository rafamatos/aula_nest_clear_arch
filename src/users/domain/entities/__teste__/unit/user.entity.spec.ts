import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../../testing/helpers/user-data-build';

describe('UserEntity unit teste', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  it('constructor metodo de teste', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)

  })

  it('name metodo de teste', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toEqual(props.name)
    expect(typeof sut.name).toBe('string')
    expect(sut.name).toEqual(props.name)
  })

  it('email metodo de teste', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toEqual(props.email)
    expect(typeof sut.email).toBe('string')
    expect(sut.email).toEqual(props.email)
  })

  it('password metodo de teste', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toEqual(props.password)
    expect(typeof sut.password).toBe('string')
    expect(sut.password).toEqual(props.password)
  })

  it('createdAt metodo de teste', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })


})
