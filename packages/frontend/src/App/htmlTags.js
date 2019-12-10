import React, { PureComponent } from 'react';

export default class Div extends PureComponent {
  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export class Table extends PureComponent {
  render() {
    return (
      <table
        id={this.props.id}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </table>
    );
  }
}

export class TableHeader extends PureComponent {
  render() {
    return (
      <thead
        id={this.props.id}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </thead>
    );
  }
}

export class Row extends PureComponent {
  render() {
    return (
      <tr
        id={this.props.id}
        key={this.props.uniqkey}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </tr>
    );
  }
}

export class Header extends PureComponent {
  render() {
    return (
      <th
        id={this.props.id}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </th>
    );
  }
}

export class Data extends PureComponent {
  render() {
    return (
      <td
        id={this.props.id}
        key={this.props.key}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </td>
    );
  }
}
export class Button extends PureComponent {
  render() {
    return (
      <button
        type="button"
        id={this.props.id}
        key={this.props.key}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export class Body extends PureComponent {
  render() {
    return (
      <tbody
        id={this.props.id}
        className={this.props.className}
        style={{
          ...this.props.style,
        }}
      >
        {this.props.children}
      </tbody>
    );
  }
}

export class Text extends PureComponent {
  render() {
    return (
      <p
        style={{
          margin: 0,
          padding: 0,
          ...this.props.style,
        }}
      >
        {this.props.children}
      </p>
    );
  }
}
