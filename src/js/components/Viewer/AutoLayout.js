/* @flow */

import type {Width, Layout} from "./Layout"
import Columns from "../../models/Columns"
import type {Descriptor} from "../../Models/Log"

export default class AutoLayout implements Layout {
  width: number
  height: number
  size: number
  rowH: number
  columns: Columns

  constructor(args: $ReadOnly<Layout>) {
    this.width = args.width
    this.height = args.height
    this.size = args.size
    this.rowH = args.rowH
    this.columns = args.columns
  }

  allColumns() {
    return this.columns.getAll()
  }

  visibleColumns() {
    return this.columns.getVisible()
  }

  pickVisibleColumns(descriptor: Descriptor) {
    return descriptor.filter(
      field =>
        !!this.columns
          .getVisible()
          .find(({name, type}) => field.name === name && field.type === type)
    )
  }

  viewHeight() {
    return this.height
  }

  viewWidth() {
    return this.width
  }

  listHeight() {
    return this.size * this.rowHeight()
  }

  listWidth(): Width {
    return "auto"
  }

  rowHeight() {
    return this.rowH
  }

  rowWidth() {
    return this.listWidth()
  }

  cellHeight() {
    return this.rowH
  }

  cellWidth(_: string): Width {
    return "auto"
  }
}
